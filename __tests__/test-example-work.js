import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

configure({ adapter: new Adapter() });

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
  }
];

describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWork}/>);

  it("Should be a 'span' element", () => {
    expect(component.type()).toEqual('span');
  });

  it("Should contain as many children as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });

  it("Should allow the modal to open and close", () => {
    component.instance().openModal();
    expect(component.instance().state.modalOpen).toBe(true);
    component.instance().closeModal();
    expect(component.instance().state.modalOpen).toBe(false);
  })
});

describe("ExampleWorkBubble component", () => {
  let mockOpenModalFn = jest.fn();

  let component = shallow(<ExampleWorkBubble example={myWork[1]}
    openModal={mockOpenModalFn}/>);

  let images = component.find("img")

  it("Should contain a single image element", () => {
    expect(images.length).toEqual(1);
  });

  it("Should have image source set correctly", () => {
    expect(images.getElement().props.src).toEqual(myWork[1].image.src);
  });

  it("Should call the openModal handler when clicked", () => {
    component.find(".section__exampleWrapper").simulate('click');
    expect(mockOpenModalFn).toHaveBeenCalled();
  });
});
