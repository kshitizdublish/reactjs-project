import React from 'react';
import './home.css';

class Home extends React.Component {
    render() {

        return (
            <div className="home-component">
                <div className="panel">
                    <div className="panel-heading"><h4>About React JS</h4></div>
                    <div className="panel-body">
                        <div>
                            <strong>Definition</strong><br/>
                            React.js is a Open Source Javascript Library developed by Facebook
                            <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" title="React JS Wiki">
                                (React JS)
                            </a><br/>
                            React.js is a front end (UI) library that facilitate the creation of rich internet
                            applications (RIA). React.js gives way to create interactive, stateful
                            reusable UI components.
                        </div>
                        <hr/>
                        <div>
                            <strong>History</strong><br/>
                            React was created by Jordan Walke, a software engineer at Facebook.
                            He was influenced by XHP, an HTML component framework for PHP.
                            It was first deployed on Facebook's newsfeed in 2011 and later on Instagram.com in 2012.
                            It was open-sourced at JSConf US in May 2013.<br/>
                            React Native, which enables native Android, iOS, and UWP development with React,
                            was announced at Facebook's React.js Conf in February 2015 and open-sourced in March 2015.
                            On April 18, 2017, Facebook announced React Fiber, a new core algorithm of React framework
                            library for building user interfaces.
                            React Fiber will become the foundation of any future improvements and
                            feature development of the React framework.
                        </div>
                        <hr/>
                        <div>
                            <strong>React Features</strong><br/>          
                            JSX − JSX is JavaScript syntax extension. It isn't necessary to use JSX in React development,
                            but it is recommended. Components − React is all about components. You need to think of
                            everything as a component. This will help you maintain the code when working on larger
                            scale projects.
                            Unidirectional data flow and Flux − React implements one-way data flow which makes it easy
                            to reason about your app. Flux is a pattern that helps keeping your data unidirectional.
                            License − React is licensed <br/>
                            under the Facebook Inc. Documentation is licensed under CC BY 4.0.
                        </div>
                        <hr/>
                        <div>
                            <strong>React Advantages</strong><br/>          
                            Uses virtual DOM which is a JavaScript object. This will improve apps performance, since
                            JavaScript virtual DOM is faster than the regular DOM.
                            Can be used on client and server side<br/>
                            as well as with other frameworks.
                            Component and data patterns improve readability, which helps to maintain larger apps.
                        </div>
                        <hr/>
                        <div>
                            <strong>React Limitations</strong><br/>          
                            Covers only the view layer of the app, hence you still need to choose other technologies
                            to get a complete tooling set for development.<br/>
                            Uses inline templating and JSX, which might seem awkward to some developers.
                        </div>
                        <hr/>
                    </div>
                </div>

            </div>
        );
    }
}
export default Home;
