## Git Question A:

You have committed and pushed a bad change to your git repo.  How can you fix it (give exact command)?
Consider how to do this without destroying history, since others might have pulled your bad change and based their changes on yours?  What would this command do?

git revert , it is similar to a reset but it adds a new commit that undos or cancels the previous commit

## Git Question B:

How do you delete a local branch after completing work on it.  How would you delete a remote branch?

git branch -d localbranchname

git push origin --delete branchname



