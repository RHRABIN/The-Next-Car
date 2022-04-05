import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <h2 className='heading'>What is the context API?</h2>
            <p>Context API is a React API that can solve a lot of problems. That modern applications face related to state management and how they are passing state to their components. Instead of install a state management library in our project that will eventually cost project performance and increase the bulndle size, you can easily go with Context API and be fine with it.The Context API can be used to share data with multiple components, without having to pass data through props manually. If we use Context api in our file so first we need to delclare CreateContext and declare a name and export this. Then we need to wrap which components we can get this global value . Which component we can receive value in this component we declare useContext() method then we can use global value dinamically without prop drilling.</p>
            <h2 className='heading'>What is Semantic Tag?</h2>
            <p>A semantic HTML elements are clearly describe  both browser and developer. The benefit of writing semantic HTML stems from what should be the driving goal of any web page,they desire to communicate. By adding semantic tags to your documents, you provide additional information about that document, which aids in communication. Specifically, semantic tags make it clear to the browser what the meaning of a page and its content is. That clarity is also communicated with search engines, ensuring that the right pages are delivered for the right queries.Genarally a semantic tag are meaningful , such semantic tags are <span style={{ fontWeight: "bold" }}>abbr, h1-h6, div, span ,del, form, sub, sup , header, article, nav</span> etc. Which code write by semantic tag those are easier to read. And it has greater accessibility. Search engines and assistive technologies (like screen reader for users with a sight impairment) are also able to better understand the content of your website, meaning a better experrience for users.</p>
        </div>
    );
};

export default Blogs;