---
title: Raycast Scripts
description: Some useful Raycast Scripts
---
# Raycast Scripts

To create a raycast script you can open Raycast an type:
```
create Script command
```
Put in the meta informations and choose the language, raycast will create a file for you.


## Wiki Sync Script
This is the script for my Wiki workflow.
I need this script because I work on multiple mashines.

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

if \[\[ \`git status --porcelain\` \]\]; then

    now=$(date)
    git add .
    git commit -m "`$now`"
    gitPush=$(git push -vvv git@github.com:karimould/knowledge.git master 2>&1)
    
echo   'Sync Complete 🐙'

fi
```
