
 global.fetch = require("node-fetch");
 import { token } from './token'

 class GithubAPI {
   
  constructor() {
    this.apiUrl = 'https://api.github.com';
    this.token = token;
  }
  

      _fetch(additionalPath, options) {
        const url = this.apiUrl + additionalPath;

        const defaultOptions = {
          // credentials: 'same-origin',
          // redirect: 'follow',
          headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `token ${this.token}`,
          },
        };

        const opt = { ...defaultOptions, ...options };

        return fetch(url, opt).then((resp) => {
          if (resp.ok) {
            return resp;
          }
          return Promise.reject(resp);
        });
      }
        
        async fetchLogin(username) {
          return this._fetch(`/users/${username}`).then(() => {
            return result.json()
          }).catch((response) => {
            if (response.status === 404) {
              return false;
            }  else {
              return false;
            }
          })
        }

        async fetchURL(username) {
          return this._fetch(`https://github.com/users/${username}`).then((result) => {
            return result.json();
           }).catch((response) => {
            if (response.status === 404) {
              throw new Error("Url not found!");
            } 
          })
        }
        
        async fetchUser(username) {
          return this._fetch(`/users/${username}`).then((result) => {
              return result.json();
          }).catch((response) => {
            if (response.status === 404) {
              throw new Error("Url not found!");
            } 
          })
        }
       
        async fetchRepo(username) {
           return this._fetch(`/users/${username}/repos`).then((result) => {
              return result.json();
          }).catch((response) => {
            if (response.status === 404) {
              throw new Error("Url not found!");
            } else {
              throw new Error("Something was wrong")
            }
          })
        }


        async fetchActivity(owner, repo) {
           return this._fetch(`/repos/${owner}/${repo}/events`).then((result) => {
              return result.json();
          }).catch((response) => {
            if (response.status === 404) {
              throw new Error("Url not found!");
            } else {
              throw new Error("Something was wrong")
            }
          })
        }

        async fetchCommits(owner, repo) {
          return this._fetch(`/repos/${owner}/${repo}/commits`).then((result) => {
             return result.json();
         }).catch((response) => {
           console.log(response)
           if (response.status === 404) {
             throw new Error("Status: 400 Bad Request");
           } else if(response.status = 500){
             throw new Error("Status: 500 Internal Server Error")
           } else {
             throw new Error("Commit not found")
           }
         })
       }

       async fetchErrors(owner, repo) {
        return this._fetch(`/repos/${owner}/${repo}/issues`).then((result) => {
           return result.json();
       }).catch((response) => {
         console.log(response)
         if (response.status === 301) {
           throw new Error("Status: Moved Permanently");
         } else if(response.status = 422){
           throw new Error("Status:  Unprocessable Entity")
         } else {
           throw new Error("Status: 404 Not Found")
         }
       })
      }
      
}




export default GithubAPI;
