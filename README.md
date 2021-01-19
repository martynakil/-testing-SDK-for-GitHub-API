# -testing-SDK-for-GitHub-API




GitHub API (https://docs.github.com/en/rest) has very large account management capabilities. What you do with the interface, you can also do with the API, e.g 

download user information (documentation: https://docs.github.com/en/rest/reference/users#get-a-user)
download information about repositories (documentation: https://docs.github.com/en/rest/reference/repos#list-public-repositories)
get information about commits in the repository (documentation: https://docs.github.com/en/rest/reference/repos#list-commits)
download information about commit comments (documentation : https://docs.github.com/en/rest/reference/repos#list-commit-comments)
download information about errors in the repository (documentation: https://docs.github.com/en/rest/reference/issues#list-repository-issues)
download information about the activity (documentation: https://docs.github.com/en/rest/reference/activity#list-repository-events)



The documentation is based on the examples for curl. I had to translate it into java script (this documentation helped: https://idratherbewriting.com/learnapidoc/docapis_understand_curl.html )


I was also able to manage my account after generating my token. [ https://docs.github.com/en/rest/guides/basics-of-authentication, https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token ]


The library should be created in accordance with the TDD methodology, i.e. red-green-refactor. First, you write tests that you have to configure yourself. Only then do you write the implementation. Let your tests determine what functionality your library will have


I wrote in accordance with:
RED: writing the test
GREEN: case-by-case implementation
REFACTOR: generalization of the solution

![Zrzut ekranu 2021-01-19 o 22 24 13](https://user-images.githubusercontent.com/59742201/105095876-907b4200-5aa6-11eb-967c-7180044f7025.png)
