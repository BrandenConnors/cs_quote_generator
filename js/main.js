
document.querySelector('button').addEventListener('click', getFetch)
// document.querySelector('button').addEventListener('click', getPhoto)

function getFetch(){

  const url = `https://programming-quotes-api.herokuapp.com/Quotes/random`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#name').innerText = data.author
        document.querySelector('#quote').innerText = data.en
        const author = document.getElementById('name').innerHTML
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
// const author = document.getElementById('name').innerHTML
// console.log(author)
// function getPhoto(){ 
//   const author = document.querySelector('#name').innerText.replace(/\s/g, '%20')

//   const url2 = `https://en.wikipedia.org/w/api.php?action=query&titles=${author}&prop=pageimages&format=json&pithumbsize=250`

//   fetch(url2)
//   .then(res => res.json()) // parse response as JSON
//   .then(data => {
//     console.log(data)
//     // document.querySelector('img').src = `https://en.wikipedia.org/w/api.php?action=query&titles=${data.author.replace(/\s/g, '%20')}&prop=pageimages&format=json&pithumbsize=250`
//   })
//   }

