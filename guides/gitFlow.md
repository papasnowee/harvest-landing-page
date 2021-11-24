# Git flow

We have mainstream branch _main_, which should be kept clean and up-to-date
with the production version

The development branch is _develop_.

_Develop_ branch should be actual with _main_ branch  
All tasks will divide into three types: [task, feature, bugfix]

When one starts a task, they should create new branch from _develop_  
`[from branch develop]`  
`git branch -b task/webpack_change-build-settings`  
`git branch -b feature/UI_button`  
`git branch -b bugfix/UI_button-fix`  
**note:** branch naming recommendation [task-type]/[theme]\_[short-description]

- task - for service tasks (like setting up environment, changing configs)
- feature - for new code, new functionality
- bugfix - for bug fixes

After finishing a task create a _Pull Request_ into _develop_ for code review from teammates

In case of merge conflicts with the pull request, one should locally merge target
branch into the source branch and resolve them, then update remote branch  
`git fetch` - dont forget to keep yours git files up to date with remote  
`git merge origin/develop`  
--resolve conflicts--  
--commit your changes--  
`git commit --no-edit` or `git commit -m [message]`  
`git push origin task/webpack_change-build-settings`

# File structure

- _src/ui_ - for components (constants.ts, types.ts, index.ts, styles.ts),
  can include inner specific components in their own dirs
- _src/pages_ - for pages (routes), each route must have its own dir and file.
  Page components exported via _src/pages/index.ts_. A page dir holds page
  component Page.tsx, can hold constants.ts, types.ts, styles.ts
- _src/style_ - for base styles, collections and scaffolding
- _src/api_
- _src/App_
- _src/assets_
- _src/lib_
- _src/routes_
- _src/services_
- _src/static_
- _src/stores_
- _src/types_
- _src/utils_
