const express =require('express')
const newsRouter=express.Router()
const axios=require('axios')

newsRouter.get('/',async(req,res)=>{
   try {
    const url= 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a9c7ad1fcb7a49d6be01f5f9f232b6c1';
    
    const newsAPI =await axios.get(url)
    res.render('news',{articles:newsAPI.data.articles})
//a9c7ad1fcb7a49d6be01f5f9f232b6c1
   } catch (err) {
    console.log(err);
    //res.render('news',{articles:null})
    // if(err.response){
    //     console.log(err.response.data)
    //     console.log(err.response.status)
    //     console.log(err.response.headers)
    // }else if(err.request){
    //     console.log(err.request)
    // }else{
    //     console.error('Error',err.message)
    // }
   }

})

newsRouter.get('/news/:category',async(req,res)=>{
    var category = req.params.category;
    try {
     const url= 'https://newsapi.org/v2/top-headlines?country=us&category=' + category + '&apiKey=a9c7ad1fcb7a49d6be01f5f9f232b6c1';
     
     const newsAPI =await axios.get(url)
     res.render('category',{articles:newsAPI.data.articles})
 //a9c7ad1fcb7a49d6be01f5f9f232b6c1
    } catch (err) {
     console.log(err);
     //res.render('news',{articles:null})
     // if(err.response){
     //     console.log(err.response.data)
     //     console.log(err.response.status)
     //     console.log(err.response.headers)
     // }else if(err.request){
     //     console.log(err.request)
     // }else{
     //     console.error('Error',err.message)
     // }
    }
 
 })
/*
newsRouter.get('/:id',async(req,res)=>{
    let articleId=req.params.id
    try {
     const newsAPI =await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/${articleId}`)
     res.render('newsSingle',{article:newsAPI.data})
 
    } catch (err) {
     res.render('newsSingle',{article:null})
     if(err.response){
         console.log(err.response.data)
         console.log(err.response.status)
         console.log(err.response.headers)
     }else if(err.request){
         console.log(err.request)
     }else{
         console.error('Error',err.message)
     }
    }
 
 })
*/
 newsRouter.post('',async(req,res)=>{
    let search=req.body.search
    try {
        let url= `http://newsapi.org/v2/everything?q=${search}&apiKey=a9c7ad1fcb7a49d6be01f5f9f232b6c1`;
    
    
    const newsAPI =await axios.get(url)
    res.render('newsSearch',{articles:newsAPI.data.articles})
    /* const newsAPI =await axios.get(`https://raddy.dev/wp-json/wp/v2/posts?search=${search}`)
     res.render('newsSearch',{articles:newsAPI.data})*/
 
    } catch (err) {
    //  res.render('newsSearch',{articles:null})
     if(err.response){
         console.log(err.response.data)
         console.log(err.response.status)
         console.log(err.response.headers)
     }else if(err.request){
         console.log(err.request)
     }else{
         console.error('Error',err.message)
     }
    }
 
 })

module.exports=newsRouter
