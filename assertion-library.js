import chalk from 'chalk';

export const expect = (actual) => {
  return {
    toBe(expected) {
      if(actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toEqual() {},
    toBeGreaterThan() {},
  }
}

export const test = async (title, cb) => {
  console.log('----------------------------------------------------------------')
  try {
    await cb()
    console.log(chalk.green(`✔ ${title}`))
  } catch (error) {
    console.error(chalk.red(`✘︎ ${title}`))
    console.error(chalk.red(error))
  }
  console.log('----------------------------------------------------------------')
}

global.expect = expect;
global.test = test;