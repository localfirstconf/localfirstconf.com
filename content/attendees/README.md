## Creating an Attendee Profile

To connect with others at the conference, you can create an attendee profile right here in the browser by following these steps.

**Please create your profile before May 29th.**

1. Copy the MDX code below as your profile template.
2. Click on "Add file" and "Create new file" above in this directory.
3. Name the file like this: `firstname-lastname.mdx`.
4. Update the template with your data. See field descriptions below.
5. Click on "Commit changes". This will fork this repo with your commit and you will be redirected to the compare page.
6. Click on "Create pull request" and create the PR.

We will then check your commit and merge it so that your profile is online and ready to connect.

### Submitting your Profile via Email

If you don't want to create a PR in this repo, feel free to send your profile information over via email to [lukas@lw.works](mailto:lukas@lw.works).

### Connecting your Profile

After the Local-First Conf schedule is announced, you can connect your profile using your slug (name of the file; _firstname-lastname_) on the website.

With that, you can open your profile and show the embedded QR code to anyone you want to connect with. Whoever scans your code, can then see your profile and contact details.

### Profile Fields

| Field       | Description                                                                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`      | **Required**. Your full name.                                                                                                                                          |
| `role`      | **Required**. E.g. _Role @ Company_ or _Freelancer_ – whatever describes you best.                                                                                     |
| `avatar`    | **Required**. Link to your avatar on X/Twitter. If you want to use an image from another site, you need to add the host to [`next.config.mjs`](../../next.config.mjs). |
| `email`     | Your email address.                                                                                                                                                    |
| `whatsapp`  | Your WhatsApp phone number.                                                                                                                                            |
| `twitter`   | Link to your X/Twitter profile.                                                                                                                                        |
| `linkedin`  | Link to your LinkedIn profile.                                                                                                                                         |
| `instagram` | Link to your Instagram profile.                                                                                                                                        |
| `website`   | Link to your website.                                                                                                                                                  |

### Profile Template

```
---
name: John Doe
role: Software Engineer @ Acme Inc.
avatar: https://i.imgur.com/5rb25dS.jpeg
email: john.doe@acme.com
whatsapp: +00 123 4566789
twitter: https://twitter.com/
linkedin: https://linkedin.com/
instagram: https://instagram.com/
website: https://google.com/
---

You can add a short description of yourself here.
```
