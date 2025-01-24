Python - CI/CD pipeline

The tools that will be used in the process of CI are the following: For linting, Pylint. For testing, Pytest. Lastly, for building, SCons will be used.

For a Jenkins alternative, a solution of a self-hosted CI system is Circle CI. Circle Ci also allows server and cloud options to be used. Azure DevOps is considered to be a solid option as a cloud based CI system alternative to GitHub Actions, as it was released much earlier and it is battle tested.

For the current team setup and the application scale, a cloud based solution is better as it is easier to setup and the project does not require anything special (ex. GPU to run tests). If the application scales to multiple teams and the complexity grows with it, introducing new requirements, it is worth going through the hassle of building a self hosted solution, which will include more overhead in the initial setup, but it will grant the flexibility of choosing hardware based on the complexity, which can be later scaled if it needs to. Another advantage of choosing self-hosted in this scenario is the privacy, as the team owns and controls every aspect of the CI system.
