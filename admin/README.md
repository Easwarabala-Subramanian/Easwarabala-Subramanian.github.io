# Publisher setup (one time)

1. Sign in to GitHub as the account that owns the website repository.
2. Settings → Developer settings → Personal access tokens → **Fine-grained tokens** → *Generate new token*.
3. **Repository access:** *Only select repositories* → pick the website repository only.
4. **Permissions → Repository → Contents:** *Read and write*. Nothing else.
5. Set an expiry (e.g. 1 year), generate, and copy the token.
6. Open `/admin/` on the author's device, paste it into **Access code**, press **Save**.

The token stays in that browser only (never in the repository). The page itself is public; the token is the lock — anyone without it cannot publish. If a device is lost, delete the token on GitHub.

## Publishing
Choose PDF → type → title/date → **Publish**. Wait for "Live!", then 1–2 minutes for GitHub Pages to rebuild.
