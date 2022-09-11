---
    metas:
        title: "My Cyber Security Presentation"
        description: "My amazing presentation about Cyber Security"
---

# Hello

Hello! I am Om Dwivedi and this is my presentation!
![Om's face](https://avatars.githubusercontent.com/u/80004184?v=4)

# Our Cyber Security Presentation

> By Om the chad fedora user

Today I will go over 2 topic I want ya'll to know about: - why linux gud - why
VPNs aren't all that are advertised as

---

## Lets start with linux!

Linux® is a free and open source unix-like kernel, which is the like the root of
every operating system. Linux® was created a free and open source
re-implementation of the Minix kernel, Minix was a closed source UNIX® operating
system. In combination with a user space like GNU or Busybox, Linux® is a
complete operating system.

> remember that linux is unix-like not a uppercase unix system, uppercase unix
> systems are officially licensed by UNIX®.

Now before you go on talking about how its just Om and Yavor blabbering on about linux just hear me out 😉 {.big}

## Why Linux is **actually** better

Well for one linux® is free and open source, others like windows and mac are
closed source, and totally not free software.

The other thing is that it's way faster. Lets think of this logically, an OS uses
system resources to run. A OS like MS Windows uses so many resources to run that
it makes the system slower. This also goes for Mac. Linux on the other hand uses
less resources to run itself making it faster.

Linux can virtually run on anything, It can on the potatoest of potato systems. Linux runs in all the servers of the websites, social media, you car, you nearest food online ordering system.

In terms of security, Linux would still stay at top. The whole concept of open source is a more secure and better developmental model. Mr. Torvalds explained that open source program development creates more branches to the tree which leads to more checks and balances, better decisions, more efficient merging of new ideas and a stronger, faster and more secure program. You build a better community by empowering everyone in the community. The idea of an community building software is in itself a great idea. If someone was to find a backdoor in linux they would just simply fix it and merge it. Attempts to create backdoors have been made by people (mostly NSA) but the nature of community made backdoors passing through impossible. 
<br />
<img src="http://blog.emertxe.com/wp-content/uploads/2017/10/3-1.jpg" alt="Development Proccess"
width="400"
length="300"
/>




# Browser related things can be seperated from the OS
The second reason is that a kernel security module (which I will mention in a bit) completly isolates the browser from the rest of the system my containerizing the whole browser session or using cloud browsing. After tweaking the settings you can actually get the software to consider every website you visit untrusted and in the isolated enviorment you can render files remotly or "sanatized" without the need to download them.

The third reason is the 8 LSM that are implemented to keep linux secure.



## LSM's are Linux Security Modules (which is pretty self explanatory) 

## SELINUX

Since SELinux is attribute-based, the security identifiers for files are kept in the file system's extended file attributes. Use ls -Z, for instance, to view the security context for /bin/bash.
<br />
And this is how it goes down! 

1. On a file path, a user space process calls open().

2. The system call is initiated, and a kernel file object is obtained using the path string. An error is returned if the parameters are wrong.

3. The file permissions for discretionary access are examined. Does the requested file have permission to be opened by the current user? If not, the system call is aborted and the user receives an error.

4. The LSM framework calls each of the file open hooks for the enabled LSMs if the DACs are satisfied. If a single LSM hook returns an error, the system call is ended and the user is informed of the error.

5. The file is opened for the process and a new file descriptor is returned to it in user space if all security checks are successful.
<br />

!["hello"](https://images.squarespace-cdn.com/content/v1/5e1f51eb1bb1681137ea90b8/1585616703834-6WW2LXZNBZE855UPL6B0/image-asset.jpeg?format%3D1500w)

---




### SMACK – SIMPLIFIED MANDATORY ACCESS CONTROL

 The second LSM developer to be merged into the Linux kernel was Simplified Mandatory Access Control (SMACK), which uses an attribute-based MAC implementation similar to SELinux (as part of the 2.6.24 release). SMACK was created for embedded systems and is easier to manage than SELinux. The MAC implementation used by Automotive Grade Linux and Tizen by default is called SMACK.
 
<br />
<br />

---

### APPARMOR

Another MAC implementation is AppArmor, which was created by Immunix and integrated into the kernel with the 2.6.36 update. The main MAC implementation for Debian-based systems is AppArmor.

In addition to having less complicated tooling, AppArmor differs from SELinux most noticeably in that it is path-based rather than attribute-based.

There are advantages and disadvantages to path-based approaches. On the plus side, since extended attributes are not necessary for storing security context information, rules based on paths can protect files on any file system. Since the path can be saved in the profile without labeling a real file or directory, rules can also be set up for files that may not yet exist. The most frequently mentioned drawback is that numerous paths may point to the same physical file since hard links can be created. Depending on the path taken to access it, the security policy for a single file may differ, which could lead to unanticipated security gaps.

---



### TOMOYO

Like AppArmor, TOMOYO is a path-based MAC implementation that was initially incorporated into Linux 2.6.30. To protect embedded systems, TOMOYO enables security administrators to capture all user-mode process interactions while testing. From this data, policies can be created that limit interactions to only those observed during development and testing. User-mode processes should thus be limited to just carrying out previously observed behaviors when systems secured with TOMOYO are placed in the hands of untrusted people or in hostile settings, simplifying policy generation.

---

### LOADPIN

A "minor" LSM called LoadPin, which was incorporated into Linux 4.7, makes sure that all kernel-loaded files (modules, firmware, etc.) come from the same file system and assumes that this file system is backed by a read-only device. This is meant to make embedded systems that don't require any of the infrastructure for kernel module signing or checking whether the system is set up to boot from read-only devices simpler.

For some types of embedded systems, LoadPin can make the process of defending the kernel against malicious modules simpler. Security that is simple to use is more likely to be used.

---

### YAMA

Yama is an LSM that was integrated into Linux 3.4 and is designed to gather DAC security limitations that are system-wide but are not addressed by the core kernel. It now supports narrowing the scope of the ptrace() system function so that sensitive data from processes running as the same user cannot be extracted in the event of a successful attack on one of the user's running processes using ptrace.

---

### SAFESETID

SafeSetID, merged in Linux 5.1, is an LSM used to restrict UID/GID transitions from a given UID/GID to only those approved by a system-wide whitelist. Learn more [here](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/admin-guide/LSM/SafeSetID.rst?h=v5.4-rc6#n34)

---

### LOCKDOWN LSM

Lockdown is an LSM that implements a "lockdown" functionality for the kernel and was merged into Linux 5.4. A kernel command-line argument can be used to lock down the kernel for integrity or secrecy when lockdown is enabled. Features that allow userspace to manipulate the kernel are disabled when lockdown is set to integrity. Included in this list are the following features: loading unsigned modules, access to /dev/mem,kmem,port, access to /dev/efi test, kexec of unsigned images, hibernation, direct PCI access, raw IO port access, raw MSR access, editing ACPI tables, direct PCMCIA CIS storage, changing serial port IO settings, unsafe module parameters, unsafe mmio, and debugfs access. All integrity protections are enabled as well as the ability for userland to extract potentially sensitive data from a system when lockdown is set to secrecy all integrity safeguards are activated, and capabilities like /proc/kcore access, usage of kprobes, use of bpf to read kernel RAM, unsafe use of perf, and use of tracefs are disabled to prevent userland from accessing potentially sensitive data from a running kernel.

---

I could give many other examples such as the security competitions where hackers were able to hack Windows and Mac but no one was able to crack Linux even after millions of dollars in prizes for cracking Linux none of the hackers were able to do it.

Another is that Windows leaves backdoors in it's OS to reduce pirating but hackers use those backdoors to hack into systems. This is why you always need a anti-virus on MS Windows or Mac but never on Linux Distributions.

But thats enough for right now, if you want to learn more on why windows or Mac isn't the best choice you can do some research on it through searching :)

---

## Next lets go over VPNs!

A Virtual Private Network (VPN) is a network that allows you to connect to a
network without the need to go through a physical connection. So like lets say
you work for a company that has a network that you want to use for your work,
but you don't want to go there to access all the network devices, well VPNs let
you do that!

## Why are these not the best for privacy?

Well for one with a VPN your privacy can be easily broken, encrypted or not, you
can be very easily geolocated and fingerprinted and the other is that most of
the time the VPN provider keeps a lot of information about you, like every page
you visit, and obviously that is not good for your privacy.

## Okay so what do I use then?

Well for one you can use Tor! Or i2p though I'm not going to talk about that
today.

## Whats Tor?

Well for one, lets set aside the misconceptions of Tor, no it isn't made for the
dark web (Criminals are smart for using though), no its not illegal to use, okay
now lets compare VPNs to the Tor onion service, Tor uses something called
circuits, basically like a bunch of servers that make the requests for you, well
that sounds like a VPN right? Well not exactly Tor's security is on another
level compared to regular VPNs, point is that Tor's security is much better than
regular VPNs, and that is why Tor is the best for privacy. If you wanna research into the Tor onion service, you can find it [here](https://torproject.org/)

## Examples of how VPN providers infringe privacy

Lets say the government suspects you for a crime, but you use a VPN, the VPN provider is required by law to provide you with information about you, and that information is used to identify you. Which is called a subpoena. And you might say, "what if I haven't committed any crimes lol", well the government use that as an excuse to get massive amounts of data on users. Anyways point is the fact that they have the info to give to the government is bad.

---

And now you know why linux is the one you should go towards and why VPNs might not actually be as secure as you think. {.big}



I hope you liked my presentation and that I did good on it. :)

<br />
<br />

---

## Credits

Ruffell, S. (2020, April 3). *A brief tour of linux security modules.* Star Lab Software. Retrieved September 11, 2022, from https://www.starlab.io/blog/a-brief-tour-of-linux-security-modules 

emertxe_admin. “Why Is Linux More Secure than Other Operating Systems?” Emertxe, 12 Oct. 2017, www.emertxe.com/embedded/why-linux-is-more-secure-than-other-operating-systems.

VPN knowledge is by me!
