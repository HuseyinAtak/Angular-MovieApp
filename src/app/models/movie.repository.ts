import { Movie } from "./movie";

export class MovieRepository{
    private movies:Movie[];

    constructor(){
        this.movies=[
            {id:1, title:"Sonic", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis unde id ratione debitis maxime enim quasi? Obcaecati corrupti, quisquam odio nihil odit explicabo amet blanditiis eaque aliquam hic voluptatem. Excepturi.", imageUrl:"sonic.jpg", isPopular:true, datePublished: new Date(2002,10,10)},
            {id:1, title:"L&M", description:"L&m Açıklama", imageUrl:"Leylailemecnun.jpg",isPopular:false, datePublished: new Date(2002,10,10)},
            {id:1, title:"Ragnarok", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis unde id ratione debitis maxime enim quasi? Obcaecati corrupti, quisquam odio nihil odit explicabo amet blanditiis eaque aliquam hic voluptatem. Excepturi.", imageUrl:"Ragnarok.jpg",isPopular:true, datePublished: new Date(2002,10,10)},
            {id:1, title:"Truman Show", description:"Truman Show Açıklama", imageUrl:"TrumanShow.jpg",isPopular:false, datePublished: new Date(2002,10,10)},
          ]
    }

    getMovies(): Movie[]{
        return this.movies;
    }
    getPopularMovies():Movie[]{
        return this.movies.filter(i=>i.isPopular);
    }

    getMovieById(id:number):Movie{
        return this.movies.find(i=>i.id==id);
    }
}