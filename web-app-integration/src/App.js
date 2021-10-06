import React from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  React.useEffect(() => {
    const privcloud = window.createPrivCloud();
    privcloud.createRecordList({
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLjAsInR5cGUiOiJ1c2VyLWFjY2VzcyIsInN1YnR5cGUiOiJwb3J0YWwiLCJuYW1lIjoiYXJkYUB2YW50YWdlcG9pbnQuY28iLCJpZCI6MjMsInBjcm4iOiJwY3JuOjEyMzQ1Njc4OmVudGl0eS91c2VyOjIzIiwianRpIjoiMTBkZTIwZjUtNzc5OS00MzczLWEyOGUtYTU2MTUzZTkxNzA3IiwiZm9yX3NpdGUiOiJzdGFnaW5nLWFwaS5wcml2Y2xvdWQuY29tIiwiaXNzdWVkX3RpbWVzdGFtcCI6IjIwMjEtMDktMjJUMTQ6MjY6MDYuNzM0MTA0Iiwic2lnbmF0dXJlX3B1YmxpY19rZXkiOiItLS0tLUJFR0lOIFBVQkxJQyBLRVktLS0tLVxuIE1JR2ZNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0R05BRENCaVFLQmdRQ2JyNGI2Q1pFZktHVW40WnNkMlpKMXVYdFpcbiB0Vlg5NW1GTkM0aTM4YVVmblBER0FFWmVtOXdKb1FTYWdGbkxFQUdjSjljaEtnRXZoUVcxZ1FRRVlmTFJqeDc4XG4gNTlaMHV1SFlYWTk4OHArbDVDd0dsU0NrZmF3ZkgzMmRkVDU4OFc0VElFcUlLdmQzSlFKTlphNjdPYXNDS2VUclxuIG01UG14QTlqK1NuSXNDMmZNUUlEQVFBQlxuIC0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLSIsInRhZ3MiOnsibWZhX3ByZXNlbnQiOmZhbHNlfSwiY29uZGl0aW9ucyI6eyJleHBpcmVzX2F0IjoiMjAyMS0wOS0yMlQxNDo1NjowNi43MzQxMjMifX0.N0avAgrco1UlyhpslLet8S1TuN8JzyQXUKFU7JLKt-4',
      containerGuid: 'aaaaaaaa-a9eb-4425-b356-5f7976b5defb',
      recordTypeId: 3,
      anchor: document.getElementById('example'),
      options: {
        title: 'Web Integration Example',
        sorting: true,
        pageSize: 10,
        export: true,
        search: true,
        updatable: true,
        addable: true,
        deletable: true,
      }
    });
  }, []);

  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Simple React App</h1>
      </header>
      <div id="example" />
    </div>
  )
}

export default App;
