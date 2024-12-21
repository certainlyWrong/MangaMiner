import chalk from 'chalk'

export function hello(name: string) {
  console.log(chalk.green(`Olá, ${name}! Bem-vindo à minha CLI!`))
}
