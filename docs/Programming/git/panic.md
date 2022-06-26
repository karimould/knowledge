# GitHub Panic Moves

## Undo last push

1. See last commits:

```bash
git log
```

or (I prefer this one) 

```bash
git log --oneline
```

Get the hash from the commit I want to undo

2. Undo commit with hash

Create new commit with Revert as message in the beginning


```bash
git revert <commit hash>
```

## Undo last commit 