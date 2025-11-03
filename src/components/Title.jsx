import React from "react";


export default function Title({ text, classes }) {
    return (
        <h1 className={!classes ? "text-center " :  classes}>
           {!text ? "Title" : text}
        </h1>
    );
}