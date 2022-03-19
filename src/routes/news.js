const  axios  = require('axios')

const router = require('express').Router()

router.get('', async(req, res) => {
    try {
        const newsAPI = await axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-30&sortBy=publishedAt&apiKey=ee1fd12e6d9645fcbca47c66b162a18b`)
        res.render('news', { articles : newsAPI.data.articles })
    } catch (err) {
        if(err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
            res.render('news', { articles : null })
        } else if(err.requiest) {
            res.render('news', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('news', { articles : null })
            console.error('Error', err.message)
        }
    } 
})

router.get('/:id', async(req,res)=>{
    let articlesID = req.params.id
    try {
        const newsApi = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2022-02-18&sortBy=publishedAt&apiKey=ee1fd12e6d9645fcbca47c66b162a18b${articlesID}`)
        // console.log(newsApi.data);
        res.render('newsSingle', {article:newsApi.data })
    } catch (err) {
        if (err.response) {
            res.render('newsSingle', {article:null })
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if(err.request) {
            res.render('newsSingle', {article:null })
            console.log(err.request);
        }else{
            console.error('Error', err.message);
            res.render('newsSingle', {article:null })
        }
    }
})

router.post('', async(req, res) => {
    let search = req.body.search
    try {
        const newsAPI = await axios.get(`http://newsapi.org/v2/everything?q=${search}&apiKey=ee1fd12e6d9645fcbca47c66b162a18b`)
        res.render('newsSearch', { articles : newsAPI.data.articles })
    } catch (err) {
        if(err.response) {
            res.render('newsSearch', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('newsSearch', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('newsSearch', { articles : null })
            console.error('Error', err.message)
        }
    } 
})

module.exports = router
