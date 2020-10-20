Na aula de hoje abordamos sobre: conflitos, criação de branch, como trocar
para uma branch já existente, criação de pull request e como adicionar um reviewer
para revisar nosso código que estamos mexendo em determinada branch.

Resumo de comandos utilizados:
  git add (adicionar no stage)
  git commit -m "mensagem" (adicionar mensagem para pacote de alterações)
  git pull (traz alterações do repositório remoto para nosso repositório local
  , ou, busca alinhar as alterações do Github com as alterações da nossa máquina)
  git push (envia as alterações que estão no stage para o Github efetivamente)

  git checkout (altera da branch atual para uma outra branch existente)
  git checkout -b nomeDaBranch (efetua a criação de uma branch, e acaba "clonando"
  a versão (todos arquivos do repositório), com base na branch que estava no momento
  em que criou a branch nova, ou seja, se você criar uma branch X a partir da master
  a branch X terá todos arquivos que a branch master tinha até aquele momento)