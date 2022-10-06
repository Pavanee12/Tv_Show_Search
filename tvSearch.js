const form =document.querySelector('#searchForm');
// const div1 =document.querySelector('#imgSection');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    var block1 = document.getElementById("imgSection");
    block1.innerHTML='';
    const searchTerm =(form.elements.query.value);
    const config = {params: {q: searchTerm},}
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`,config)
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    makeImages(res.data);
    form.elements.query.value='';
})

const makeImages = (shows) =>
{
    for (let result of shows)
    {
        // console.log(result.show.image.medium);
      const img =document.createElement('img');
      if(result.show.image)
      {
      img.src=result.show.image.medium;
    //   document.body.div.append(img);
       var block = document.getElementById("imgSection");
       block.appendChild(img);
      }
    }
}