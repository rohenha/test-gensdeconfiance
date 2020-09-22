<p align="center"><img src="https://upload.wikimedia.org/wikipedia/fr/thumb/9/93/Logo_GensDeConfiance3.png/1200px-Logo_GensDeConfiance3.png" height="120"></p>

# GDC Frontend Hiring Test

Thanks a lot for applying to our Frontend Developer position at GensDeConfiance! We're super excited to learn more about your profile and background.

To help us understand how you work, we have put together this test. It involves writing a simple application as described below.

Out of respect for your time, you don't need to spend more than three hours on it. You are evidently free to spend more time if you want, but in that case, please let us know. If there are things you would have done if you had had more time, please include them in your `README`.

## Deliverable

Ideally: a git repo with your code, shared with `charlax`, `kbsali` and `loicgoyet` through Github (for instance using a private repo).

Otherwise, a zipped archive including the `.git` folder will do.

The report, the code comments, the `README` and the documentation should all be in English. Don't forget to proofread yourself!

## Requirements

GDC exposes an API to test if an email belongs to a GDC member.

- Implement a tiny app (packaged as a React website or as a ReactNative app) that lets the user check an email against this API.
- Choose **either** React or ReactNative to implement it.
- We have proposed a design below. Try to stick to it unless you want to show off your UX/UI skills and come up with something better! You can choose a different layout if you want to adapt to mobile screens.
- We want to limit the usage of this tool to `@gensdeconfiance.com` and `@gmail.com` email addresses; and our designer wants one input per domain, as shown on the proposed solution.
- Show the result "[email] is a GDC member" or "BOOOH we don't know [email]" in a log fashion where the messages are appended to a container on the side. This way we have a history of the submitted email addresses.

<p align="center"><img src="https://gensdeconfiance.s3.amazonaws.com/docs/GDC-membership-tester__maquette.png"></p>

## API info

- Endpoint: `http://127.0.0.1/?email=[email]`
- Example valid member: `nicolas@gensdeconfiance.com`, `celine@gensdeconfiance.com`, etc.

### Running the API

Prerequisites:

- Docker (recent version, e.g. `19.03.8`)
- `docker-compose` in your PATH (should be installed as part of Docker)
- Make

To start the API:

```bash
$ cd api
$ make start
```

To test the API:

```bash
$ curl localhost:5000/?email=toaster@gensdeconfiance.com
{"exists":false}

$ curl localhost:5000/?email=nicolas@gensdeconfiance.com
{"exists":true}
```

Once you're done you can kill the API with `ctrl+c` and clean up everything:

```bash
$ make clean
```

There is special mode in the API which will fake slows responses and random 500s. To activate it:

```bash
$ touch api/make_it_more_difficult
```

The API might be missing something to work as is with the front-end. Feel free to change its code!

## How we review

This is a simple exercise. Show us how well you can execute it!

Try to make your code as **production-ready** (however you define it) as possible. If you don't consider it production-ready yet, explain why. Correctness is only one of the aspects we have a look at.

If you have to choose between quality and exhaustiveness, choose quality as this will give us better insights into your skills.

If you have time, show us how well you can structure it for maintainability and extensibility.

- Production-readiness (and how you define it)
- Consistent code style
- Code quality
- Correctness
- Documentation (installation instructions, what remains to do) and its readability (conciseness, absence of typos)
- Tests
- Code architecture

## Need help?

If anything's unclear, do feel free to reach out! We'd be delighted to help you.

Good luck & happy coding!
