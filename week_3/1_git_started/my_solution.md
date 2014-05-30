## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
Adds a file to a bucket that makes it commit-able. A file must be added before it can be committed. 

#### branch
Creates a new reference to the commit. 

#### checkout
Switches to whatever branch is specified in the checkout command, make that branch current. 

#### clone
Creates a new local repository by copying one from GitHub

#### commit
Saves changes by creating a new snapshot of the project changes and referencing them to the parent file.

#### fetch
The goal is to sync a remote repository with a local repository. While it doesn't change local files, it downloads data that would allow it to.

#### logs
Shows all changes, including the commit messages and timestamps.

#### merge
The command will take whichever branch you describe in the command and merge it to the branch that is currently activated, or the most recent branch that has been checked out.

#### pull
Combines fetch and merge in order to update local repositories to match remote ones.

#### push
Updates remote repository with changes made locally. Additionally it updates the pointer for the remote repository on the local file so that the remote and local repositories are completely in sync.

#### reset
Changes commit history. Git reset moves the pointer from the current commit to a previous commit. By doing so, it effectively deletes the current commit. 

#### rm
Removes files from the index. Deletes all files

#### status
Shows all the paths that have differences between the index file and the pointer.

## Release 4: Git Workflow

Updating GitHub: 1. make sure to be in the right folder in a directory, 2. git commit, 3. git push


## Release 5: Errors you encountered
1. Error
2. Solution
3. Cause (explain the error)

1. I was confused with what was already added to git. I know that in Week 1 we added our repositories, but I was getting errors when I tried to commit files within those repositories. 

2. Like most things involving code, I told myself to stop making it complicated. I knew the solution was simple. I figured I added a tracking file, tracking nothing, called phase_0_unit_1 in the same place as my phase_0_unit_1 folder. What I needed to do was use non git commands to position myself within the phase_0_unit_1 folder, then all of my files that were added to tracking would be ready to commit and push. 

3. I was so focused on git commands that I forgot about which directory I was in. Because I wasn't in a directory that was being tracked, I couldn't commit or push.

## Release 6: Reflection

Git commands were difficult for me to understand first. When I think about what's happening, version tracking, I think of files that are saved on top of files, almost like the save as button for documents. It wasn't until I went through the last resource, Learn Git Branching, that I felt I was starting to understand what was happening. The visualizations were way helpful in understanding what was being referenced and how to update references. I went through the Learn Git Branching tutorials for the words we had to define, and I think I understand what's going on a lot more now.
