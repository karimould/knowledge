---
title: Raycast Scripts
description: Some useful Raycast Scripts
---

# Raycast Scripts

To create a raycast script you can open Raycast and type:

```
create Script command
```

Put in the meta informations and choose the language, Raycast will create a file for you.

## Wiki Sync Script

This is the script for my Wiki workflow.
I need this script because I work on multiple machines.

```bash
#!/bin/bash
\# Required parameters:
\# @raycast.schemaVersion 1
\# @raycast.title sync wiki
\# @raycast.mode compact
\# Optional parameters:
\# @raycast.icon 🐙
\# Documentation:
\# @raycast.description Script to sync my personal wiki
\# @raycast.author Karim Ould Mahieddine
\# @raycast.authorURL https://www.karimould.dev

cd ~/Projects/knowledge/
git pull

if \[\[ \`git status --porcelain\` \]\]
then
    now=$(date)
    git add .
    git commit -m "$now"
    if git push
    then
        echo   "✅ git push succeeded ✅"
    else
        echo   "❌ git push failed ❌"
     fi
else
    echo   "💬 no changes 💬"
fi
```
