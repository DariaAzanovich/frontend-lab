# Getting Started

Here will be description how to work with this repo.

<div align="center">
  <img align="" src="../assets/readme-image.png" width="400" />
</div>

## Take It

So, to work with this repo you need to fork it to your github/gitlab and then clone to locale mashine.
If you don't now what means to fork a repo, you'll find an answer here [Fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

## Track Progress

Every item in the [Progress](../README.md#progress) is a task. When you finish working on it and mark the task as checked, to do it you just need to open <b>README</b> file and using Markdown syntax change `- [ ]` to `- [x]`. Add this change as separate commit with message `check task`.

## Work Flow

Once you've cloned the repo, create `dev` branch from `main` (`master`) and push it to remote. Then every time you will start new task, create new task branch from `dev` (for ex: `getting-started`) and work only on it.

All you tasks should be on the `workflow` folder (it's already been here). Please, separate tasks by folders (for ex: `workflow/getting-started`).

If you decided that everything is done, commit you work in the task branch and you're ready to create Pull/Merge request (PR/MR). Don't forget to [check you task as done](#track-progress). Create PR/MR with the name of task (for ex: `Getting Started`) and assign your mentor as a reviewer.

If you have some notes/questions to your PR/MR you can attach them to it (in comments).
Once reviewer check your PR/MR you'll see if there're some places you need to fix. Fixes have to be commited at the same task branch and push to remote repo. After resolving all issues and PR/MR is approved you can merge it to `dev` and go forward.

Once a feature branch is merged to `dev` delete this branch.

If you're not familiar with git workflow, PR/MR and other git stuff, have a look to this [Article](https://www.freecodecamp.org/news/practical-git-and-git-workflows/).

🍀 Good luck 🍀

Have a look what you should [do next](../README.md#progress). 👀
