import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Portfolio",
    'image': {
      'desc': "A serverless portfolio",
      'src': "images/3wolfmoon-download.jpg",
      'comment': ""
    }
  },
  {
    'title': "Wildrydes",
    'image': {
      'desc': "A serverless Webapp",
      'src': "images/wildrydes-homepage.png",
      'comment': ""
    }
  },
  {
    'title': "eucalyptus-cookbook",
    'image': {
      'desc': "Chef cookbook for deploying and configuring Eucalyptus",
      'src': "images/chef-logo.png",
      'comment': ""
    }
  },
  {
    'title': "awesomeProject",
    'image': {
      'desc': "Messing with zeromq",
      'src': "images/zmq-octogon.jpg",
      'comment': ""
    }
  },
  {
    'title': "N4j",
    'image': {
      'desc': "An AWS java test framework",
      'src': "images/example3.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
