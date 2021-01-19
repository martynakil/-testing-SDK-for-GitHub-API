import GithubAPI from "../src/js/GitHubSDK"



  describe("GitHubSDK", () => {
      describe("Fetch user", () => {
        it('throw an exception  when user not found', async () => {
      
          const sdk = new GithubAPI();
          function  incorrectUser() {
            return sdk.fetchLogin('martynakilsdfxfdbg')
          }
          await expect(incorrectUser).rejects.toThrow('User not found!')
        
        })
      })


      describe("fetch user url", () => {
        it('check if user url is correct', async () => {
          const sdk = new GithubAPI();
          const response = await sdk.fetchURL("martynakil")
          expect(response).toBe("https://github.com/martynakil")
        
        })
      })

      describe("return fetch user data", () => {
        it('check if user data is available', async () => {
          const sdk = new GithubAPI();
          const response = await sdk.fetchUser("martynakil")
          expect(response.login).toBe("martynakil")
        })
      })


      describe("fetch repos", () => {
        it('fetch repos', async () => {
          const sdk = new GithubAPI();
          expect(() => {
            sdk.fetchRepo("martynakil")
          }).not.toThrow()
        })
      })


      describe("fetch activity", () => {
        it('fetch activity ', async () => {
          const sdk = new GithubAPI();
          describe("fetch activity", () => {
              expect(() => {
                sdk.fetchActivity("martynakil", "api-crud")
              }).not.toThrow()

          })
        })
      })

      describe("fetch commits", () => {
        fit('check if they are  commits in this repo ', async () => {
          const sdk = new GithubAPI();
          const response = await sdk.fetchCommits("martynakil", "practice-js-api-and-fetch");
          expect(response).not.toBeNull();
          expect(response.length).toBeGreaterThan(0)
       
        })
      })

      describe("fetch errors", () => {
        fit('check if they are errors in this repo ', async () => {
          const sdk = new GithubAPI();
          const errors = await sdk.fetchErrors("martynakil", "js-testing-async");
          expect(errors.length).toBeLessThan(5)
        })
      })





  })