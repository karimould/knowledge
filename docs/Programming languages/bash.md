---
title: Bash
---
# Bash

## Code

Pipe output to file:

```bash
ls > output.txt
```

Save current Date in variable:

```bash
now=${date}
```

Print variable:

```bash
echo ${now}
```

Check if local git repo has changes:

```bash
if \[\[ \`git status --porcelain\` \]\]; then
 echo   'CHANGES'
else
 echo   'NO CHANGES'
fi
```

Two different ways to write if statements:

1. with semicolon before then:
```bash
    if [ "Test" != 'Test' ]; then
        echo '💬'    
    else
        echo '💬'          
```

2. with no semicolon and new line before then
```bash
    if [ "Test" != 'Test' ] 
    then
        echo '💬'    
    else
        echo '💬'    
```

