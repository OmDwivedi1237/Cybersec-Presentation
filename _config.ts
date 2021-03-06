import lume from "lume/mod.ts";
import terser from "lume/plugins/terser.ts";
import svgo from "lume/plugins/svgo.ts";
import inline from "lume/plugins/inline.ts";
import relativeUrls from "lume/plugins/relative_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import metas from "lume/plugins/metas.ts";
import sass from "denosass";
import init, {transform} from 'parcel-css';

const site = lume({ src: "./src" });

site.use(metas());

const compileSass = (input: string) =>
  sass(input, { style: "compressed", load_paths: ["src/_styles/"] })
    .to_string();

site.filter("sassify", (value) => compileSass(value));
await init();
site.filter("minify", (value) => {
	const { code } = transform({
		filename: 'main.css',
		code: new TextEncoder().encode(value),
		minify: true,
	});
	return new TextDecoder().decode(code);
});

site.use(relativeUrls());
site.use(resolveUrls());
site.use(inline());

site.use(terser());
site.use(svgo());

export default site;
