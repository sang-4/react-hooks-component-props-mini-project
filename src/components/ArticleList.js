import React from "react";
import Article from "./Article";

function ArticleList({posts}){
     const articles = posts.map((item) => (
        <Article
            key={item.id}
            title={item.title}
            date={item.date}
            preview={item.preview}
            minutes={item.minutes}
        />
     ));
        return <main>{articles}</main>;

}

export default ArticleList;