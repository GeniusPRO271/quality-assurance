import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import Trap from '@/components/trap';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [arrays, setArrys] = useState('');
  const [result, setResult] = useState('');
  const [arraysINT, setArrysINT] = useState([]);
  const [validation, setValidation] = useState(false);
  const [pressed, setPressed] = useState(false);
  const manageInpts = (arrayString) => {
    console.log('result ->', arrayString);
    setPressed(true);
    // Split the string into separate strings for each array
    const arrayStrings = arrayString.split('], ');

    // Add the closing bracket back to each string (except for the last one)
    for (let i = 0; i < arrayStrings.length - 1; i++) {
      arrayStrings[i] += ']';
    }
    let result = [];
    let arrays = [];
    // Print each array string
    arrayStrings.forEach((arrayStr) => {
      console.log(arrayStr, typeof arrayStr);
      try {
        let value = JSON.parse(arrayStr);
        if (typeof value == 'object') {
          arrays.push(arrayStr);
          result.push(Trap(value));
        } else {
          arrays.push('Parsing Error');
          result.push('Parsing Error');
        }
      } catch (e) {
        console.error('Parsing error', e);
        setValidation(false); // Invalid JSON input
      }
    });

    setResult(result);
    setArrysINT(arrays);
  };

  const handleInput = (event) => {
    let value = event.target.value;
    if (value.trim() !== '') {
      setValidation(true);
    } else {
      setResult([]);
      setArrysINT([]);
      setArrys('');
      setValidation(false);
    }

    setArrys(value);
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.box}>
        <div className={styles.inputs_container}>
          <input
            id="textbox"
            type="text"
            style={{ borderColor: validation && 'lightgreen' }}
            placeholder="example: [1,2,3,4], [3,4,4,2]"
            value={arrays}
            className={styles.inputs}
            onChange={(event) => handleInput(event)}
          />
          <button
            id="button"
            className={validation ? styles.button : styles.button_error}
            onClick={() => manageInpts(arrays)}
          >
            START
          </button>
        </div>
        {pressed && (
          <div className={styles.result_container}>
            {validation &&
              result.length > 0 &&
              result.map((d, index) => {
                return (
                  <div
                    id={d}
                    className={styles.results}
                    style={{ borderColor: d == 'Parsing Error' && 'red' }}
                  >
                    {d == 'Parsing Error'
                      ? 'Parsing Error'
                      : `${arraysINT[index]}`}{' '}
                    ={' '}
                    <span id={index}>
                      {d == 'Parsing Error' ? 'Parsing Error' : `${d}`}
                    </span>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}
