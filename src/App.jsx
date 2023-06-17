import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="heading">Admission Form</div>
        <div className="form">
          <form>
            <input type="text" name='name' placeholder='Enter your name' />
            <input type="email" name='email' placeholder='Enter your email' />
            <input type="number" name='number' placeholder='Enter your number' />
            <div className="location">
            <input type="text" name='state' placeholder='Enter State' />
            <input type="text" name='city' placeholder='Enter City' />
            </div>
            <select name="course" id="course"> 
            <option value="SELECT COURSE" defaultChecked >Select Course</option>
              <option value="BCA">BCA</option>
              <option value="BTECH">BTECH</option>
              <option value="BSC">BSC</option>
              <option value="BBA">BBA</option>
            </select>
            <div className="verify">
            <input type="radio" id="radio" />
            <p>I agree to receive information regarding my enquiry</p>
            </div>
            <button type='submit' id='submit'>Submit</button>
          </form>
        </div>
      </div>
      <footer><p>By Saiyam Jain</p></footer>
    </div>
  );
}

export default App;
