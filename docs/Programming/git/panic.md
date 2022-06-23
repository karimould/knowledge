# GitHub Panic Moves

## Undo Last Push

1. See last commits:

```bash
git log
```

or (I prefer this one)

```bash
git log --oneline
```

Get the hash from the commit I want to undo.

2. Undo commit with hash

```bash
git revert <commit hash> --no-edit
```

The no-edit flag prevents git to ask for a commit message.

## Undo Last Commit

```bash
git reset --soft HEAD~
```

## Undo Multiple Commits

Add a number to the ~ symbol.

```bash
git reset --soft HEAD~<NUMBER OF COMMITS>
```

For example:

```bash
git reset --soft HEAD~2
```

Undos the last 2 commits, which were not pushed.
