import React, { useEffect, useState } from 'react'
import python  from '../assets/react.png';
import java  from '../assets/java.png';
import html  from '../assets/html.jpg';
import js  from '../assets/js.png';
import docker  from '../assets/docker.webp';
import node  from '../assets/node.png';
import react  from '../assets/react.png';
import angular  from '../assets/angular.png';
import mysql  from '../assets/MySQL.png';
import mongodb from '../assets/mogodb.png';
import aws  from '../assets/aws.png';
import noimage  from '../assets/no_image.png';



function Project(props) {

    const [imagesource,setimagesource] = useState()
    const [mystyle, setmystyle] = useState()

    const handleImgError = (event) => {
        setimagesource(noimage);
    }

    useEffect(() => {
        let frontend = ''
        let backend = ""
        let infra = ""
        let db = ""

        for (const item of props.ProjectFrontend) {
            frontend += item.name;
        }

        for (const item of props.ProjectBackend) {
            backend += item.name;
        }

        for (const item of props.ProjectBackend) {
            infra += item.name;
        }

        for (const item of props.databases) {
            db += item.name;
        }

        if(props.ProjectFrontend)
            frontend = frontend.toString().toLowerCase().replace(/\s/g, "")
        if(props.ProjectBackend)
            backend = backend.toString().toLowerCase().replace(/\s/g, "")
        if(props.infra)
            infra = infra.toString().toLowerCase().replace(/\s/g, "")
        if(props.databases)
            db = db.toString().toLowerCase().replace(/\s/g, "")

        if( frontend.length > backend.length) 
        {
            if( frontend.includes("react"))
                setimagesource(react)
            else if (frontend.includes ("js"))
                setimagesource(js)
            else if( frontend.includes("angular"))
                setimagesource(angular)
            else
                setimagesource(html)
        }

        else if( backend.length > frontend.length )
        {
            if(backend.includes("java"))
                setimagesource(java)
            else if( backend.includes("python"))
                setimagesource(python)
            else if (backend.includes ("node"))
                setimagesource(node)

            else setimagesource(js)
        }

        else if(db.includes("mongo"))
            setimagesource(mongodb)
        else if( infra.includes("docker"))
            setimagesource(docker);
        else if( infra.toLowerCase().includes("aws"))
            setimagesource(aws);

        else setimagesource(mysql)
        // console.log(frontend)
        // console.log(backend)
        // console.log(infra)

    }, [props])


    const popdown = (event) => {
            setmystyle({ bgcolor: 'yellow'})
    }

    return (
        <div>
        <div className="card my-3 shadow p-3 mb-5 bg-white rounded" onMouseOver={popdown} style = {mystyle}>
            <div className="card-header"><strong>{props.ProjectTitle}</strong></div>
            <div className="card-body">
            <div className="card-props.image text-center" style={{maxheight: '250px'}}>
                <img src={imagesource} className="newsImg" onError={handleImgError} style={{maxWidth: '100%', maxHeight: '250px', margin: '0px auto'}}/>
            </div>
            <div className="card-text my-3">
                <h6 className="card-props.title text-truncate">Tech Stack Front End</h6>
                <div className = 'text-truncate' >{props.ProjectFrontend.map((element) => {
                    return <div> <li> {element.name}  </li></div>
                })} </div>
            </div>
            <div className="card-text my-3">
                <h6 className='text-truncate'>BackEnd TechStack</h6>
                <div className = "text-truncate">{props.ProjectBackend.map((element) => {
                    return <div> <li> {element.name}  </li> </div>
                })}
                </div>
                {/* <footer className="blockquote-footer md-1">By {props.author?props.author:"Unknown"}</footer> */}
            </div>
            {/* <a href={props.url} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a> */}
            </div>
            <div className="card-footer text-body-secondary">
            {props.ProjectRemark?props.ProjectRemark:"[No Remark Available]"}
            </div>
        </div>
        </div>
    )
}

export default Project


