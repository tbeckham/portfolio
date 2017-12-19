import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Portfolio",
    'href': "https://github.com/tbeckham/portfolio",
    'desc': "This is my professional portfolio. It is serverless and uses AWS and ReactJS. You are viewing it now. Click on the 'CHECK IT OUT' button to see the source on Github.",
    'image': {
      'desc': "A serverless portfolio",
      'src': "images/3wolfmoon-download.jpg",
      'comment': ""
    }
  },
  {
    'title': "Wildrydes",
    'href': "https://wildrydes.tonybeckham.com",
    'desc': "A Web Application with Amazon S3, Lambda, DynamoDB and API Gateway",
    'image': {
      'desc': "A serverless Webapp",
      'src': "images/wildrydes-homepage.png",
      'comment': ""
    }
  },
  {
    'title': "eucalyptus-cookbook",
    'href': "https://github.com/tbeckham/eucalyptus-cookbook",
    'desc': "This cookbook installs and configures Eucalyptus on CentOS physical and virtual machines. Source and package installations are supported.",
    'image': {
      'desc': "Chef cookbook for deploying and configuring Eucalyptus",
      'src': "images/chef-logo.png",
      'comment': ""
    }
  },
  {
    'title': "awesomeProject",
    'href': "https://github.com/tbeckham/awesomeProject",
    'desc': "A message queue client and server using zeromq and go",
    'image': {
      'desc': "Messing with zeromq",
      'src': "images/zmq-octogon.jpg",
      'comment': ""
    }
  },
  {
    'title': "N4j",
    'href': "https://github.com/tbeckham/n4j",
    'desc': "A java/groovy test framework for building and running tests against AWS compatible clouds.",
    'image': {
      'desc': "An AWS java test framework",
      'src': "images/example3.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
