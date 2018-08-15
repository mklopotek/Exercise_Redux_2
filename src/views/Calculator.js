import React from 'react'
import { connect } from 'react-redux'
import { inputAction, addAction, substractAction, multiplicationAction, resultAction, divisionAction, allClrearAction } from '../state/calculator';

const styles = {
    center: {
        textAlign: 'center'
    }
}

const Calculator = (props) => (
    <div style={styles.center}>
        <div>
            <input
                type='text'
                style={{textAlign: 'right'}}
                disabled={true}
                value={props._isResultShown ? props._result : props._input}
            />
        </div>
        <div>
            <button onClick={() => props._inputAction(7)}>7</button>
            <button onClick={() => props._inputAction(8)}>8</button>
            <button onClick={() => props._inputAction(9)}>9</button>
        </div>
        <div>
            <button onClick={() => props._inputAction(4)}>4</button>
            <button onClick={() => props._inputAction(5)}>5</button>
            <button onClick={() => props._inputAction(6)}>6</button>
        </div>
        <div>
            <button onClick={() => props._inputAction(3)}>3</button>
            <button onClick={() => props._inputAction(2)}>2</button>
            <button onClick={() => props._inputAction(1)}>1</button>
        </div>
        <div>
            <button onClick={() => props._inputAction(0)}>0</button>
            <button onClick={props._addAction}>+</button>
            <button onClick={props._substractAction}>-</button>
        </div>
        <div>
        <button onClick={props._multiplicationAction}>*</button>
        <button onClick={props._divisionAction}>/</button>
        <button onClick={props._resultAction}>=</button>
    </div>
    <div>
        <button onClick={props._allClrearAction}>All Clear</button>
    </div>
    </div>
)

const mapStateToProps = state => ({
    _result: state.calculator.result,
    _input: state.calculator.input,
    _isResultShown: state.calculator.isResultShown
})
const mapDispatchToProps = dispatch => ({
    _inputAction: number => dispatch(inputAction(number)),
    _addAction: () => dispatch(addAction()),
    _substractAction: () => dispatch(substractAction()),
    _multiplicationAction: () => dispatch(multiplicationAction()),
    _resultAction: () => dispatch(resultAction()),
    _divisionAction: () => dispatch(divisionAction()),
    _allClrearAction: () => dispatch(allClrearAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)