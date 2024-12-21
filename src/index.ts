#!/usr/bin/env node

import { Command } from 'commander'
import { hello } from './commands/hello'

const program = new Command()

program
  .name('mm')
  .description('Uma CLI de exemplo com Node.js e TypeScript')
  .version('1.0.0')

program
  .command('hello')
  .description('Diz olá para o usuário')
  .option('-n, --name <name>', 'Nome do usuário', 'Adriano')
  .action(options => {
    hello(options.name)
  })

program.parse(process.argv)
