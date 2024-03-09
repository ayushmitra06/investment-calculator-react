import React from 'react'

const UserInput = ({onChangeInput, userInput}) => {

  return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required 
                    onChange={(event) => onChangeInput('initialInvestment', event.target.value)} 
                    value={userInput.initialInvestment}
                    />
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input type="number" required
                    onChange={(event) => onChangeInput('annualInvestment', event.target.value)} 
                    value={userInput.annualInvestment}
                    />
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input type="number" required 
                    onChange={(event) => onChangeInput('expectedReturn', event.target.value)} 
                    value={userInput.expectedReturn}
                    />
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input type="number" required 
                    onChange={(event) => onChangeInput('duration', event.target.value)} 
                    value={userInput.duration}
                    />
                </p>
            </div>
        </section>
    )
}

export default UserInput
