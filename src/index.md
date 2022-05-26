---
    metas:
        title: "Our Cyber Security Presentation"
        description: "Our amazing presentation about Cyber Security"
---

# Hello

I am the om yes the om that ya know probably annoys you in classes with linux
talk :)

![Om's face](https://avatars.githubusercontent.com/u/80004184?v=4)

And I am the sexy and amazing person you all know as yavko, yes YAVKO

![Yavko's face](https://github.com/yavko.png)

# Our Cyber Security Presentation

> By Yavor the manjaro plebian and Om the chad fedora user

Today we will go over 2 topic we want ya'll to know about: - why linux gud - why
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

The second reason is that the web browser is separate from the OS so that means no Back doors.

The third reason is the 8 LSM that are implemented to keep linux secure.

## LSM's are Linux Security Modules (which is pretty self explanatory)

## SELINUX

SELinux is attribute-based which means the security identifiers for files are stored in extended file attributes in the file system. For example, you can use ls -Z to see the security context on /bin/bash.

### SMACK – SIMPLIFIED MANDATORY ACCESS CONTROL

 Unlike SELinux, SMACK was designed for embedded systems and to be simpler to administer. SMACK is the default MAC implementation in Automotive Grade Linux and Tizen.
<br />
<br />

### APPARMOR

AppArmor is another MAC implementation which was originally developed by Immunix and merged into the kernel as part of the 2.6.36 release. AppArmor is the primary MAC implementation on Debian-based systems. The most notable difference between AppArmor and SELinux, besides the reduced tooling and complexity, is that it is path-based and not attribute-based.

### TOMOYO

TOMOYO is designed to protect embedded systems by allowing security administrators to record all user-mode process interactions during testing, which can then be used to generate policies that restrict interactions to only those seen during development / testing. When systems protected with TOMOYO are placed in the hands of untrusted users or in hostile environments, the user-mode processes should then be constrained to only perform previously observed actions, simplifying policy generation.

### LOADPIN

Security that is easy to use is more likely to be used, and LoadPin can simplify the process of protecting the kernel from malicious modules for certain types of embedded systems.

### YAMA

It currently supports reducing the scope of the ptrace() system call so that a successful attack on one of a user’s running processes cannot use ptrace to extract sensitive information from other processes running as the same user.

### SAFESETID

SafeSetID, merged in Linux 5.1, is an LSM used to restrict UID/GID transitions from a given UID/GID to only those approved by a system-wide whitelist. Learn more [here](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/admin-guide/LSM/SafeSetID.rst?h=v5.4-rc6#n34)

### LOCKDOWN LSM

When lockdown is enabled, a kernel command-line parameter can be used to lockdown the kernel for integrity or confidentiality. When lockdown is set to integrity, features that allow userspace to modify the kernel are disabled.

I could give many other examples such as the security competitions where hackers were able to hack Windows and Mac but no one was able to crack Linux even after millions of dollars in prizes for cracking Linux none of the hackers were able to do it.

Another is that Windows leaves backdoors in it's OS to reduce pirating but hackers use those open doors to hack into systems. This is why you always need a anti-virus on MS Windows or Mac but never on Linux Distributions.

But thats enough for right now, if you want to learn more on why windows or Mac isn't the best choice you can do some research on it through searching :)

---

## Next lets go over VPNs!

A Virtual Private Network (VPN) is a network that allows you to connect to a
network without the need to go through a physical connection. So like lets say
you work for a company that has a network that you want to use for your work,
but you don't want to go there to access all the network devices, well VPNs let
you do that!

## Why are these not the best for privacy?

Well for one with a VPN your privacy can be easily broken, encrypted or not you
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

Lets say the government suspects you for a crime, but you use a VPN, the VPN provider is required by law to provide you with information about you, and that information is used to identify you. Which is called a subpoena. And you might say, "what if I haven't committed any crimes lol", well the government use that as an excuse to get massive amounts of data on users. Anyways point is the fact that they have the info to give is bad.

---

And now you know why linux is the one you should go towards and why VPNs might not actually be as secure as you think. {.big}

## Any Questions??????

We hope you liked our presentation and that you learned something from it :) Make sure to apply this knowledge in the future and keep going!!!
lly is better that you might think.
