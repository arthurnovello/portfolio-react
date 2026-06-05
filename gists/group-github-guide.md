# Projeto em grupo simples no GitHub

**De**: [Simple Group Project Starting Guide for Github (DevMountain) [EN] ](https://gist.github.com/andrewtkemp1/fa8f28e867e17559b931c3f6de9a4b9e)

Geordyn Ader - Mentor - Dallas, TX Campus

Tradução: Arthur Novello - Brasil

## Começando - Escolha UMA pessoa do grupo para ser responsável pelos seguintes passos

 1. Vá para o GitHub e clique no + no canto superior direito. Clique em Nova Organização.
 2. De um nome que seja relacionando ao seu projeto.
 3. Adicione um email para cobrança - não se preocupe, é de graça.
 4. Escolha o plano gratuito.
 5. Adicione todos da sua equipe ao seu grupo, incluindo o seu mentor.
	 -	Todos terão que aceitar o convite através do email/notificação.
6. Agora, crie o repositório. Aqui será onde vocês realizarão os pushes como grupo.
	- Quem criar o repositorio ficara responsável por dar acesso de administrador para cada membro da equipe, incluindo mentores.
7. O Grupo precisa concordar sobre a estrutura das pastas e dos seus nomes. MANTENHA AS PASTAS/ARQUIVOS COM NOMES CONSISTENTES e ORGANIZADOS. Isso vai te salvar de MUITO trabalho mais tarde. A pessoa responsável pela estrutura pode fazer isso diretamente na *master*. NUNCA mais trabalhe diretamente na *master* depois disso.

***CADA MEMBRO DEVE CLONAR O PROJETO - NÃO CRIE UM FORK PRA ISSO!***

Agora vamos criar uma *branch* e o código.
## Organizando as suas *Branches*

Antes de criar uma branch nova, certifique-se de que você esta com a *master* atualizada. Simplesmente:

    $ git pull origin master

Agora começa a ficar perigoso. Nunca, nunca mesmo, trabalhe na *master branch*. Vamos relembrar como se cria repositórios.

	$ git checkout -b branchName

>Dica: As *branches* devem ser criadas com base em funcionalidade, não em paginas. Por exemplo, elas podem ser: fbAuth, editUserInfo, addingGulp, etc...

Agora, após criar a sua *branch*, ela só existe localmente. Então nós precisamos criar-la no GitHub para que seus colegas possam ver-la e você possa realizar *pushes* nela.

	$ git push --set-upstream origin sameBranchName

Isso deixará a sua *branch* visível no GitHub para o resto da equipe e também vai fazer com que seus próximos *pushes* sejam feitas diretamente na *branch* escolhida.

## *Adicionando, Comitando* e Pushing

**Se você completou os passos acima, já pode começar a escrever código na sua propina *branch*.**

Você vai criar e realizar *comitts* da mesma forma que você sempre realizou, mas:

> SEMPRE ANTES DE REALIZAR O *COMMIT*, TENHA CERTEZA QUE VOCÊ ESTA FAZENDO NA *BRANCH* CORRETA E NÃO NA *MASTER*.

Após adicionar os arquivos e realizar o *commit*, faça o *push* para sua *branch* no GitHub:

	$ git push origin sameBranchName

Agora, se você estiver pronto para realizar um *pull request* para juntar a sua *branch* com a *master*, vá para o GitHub:

 - *Repositório >> Branches >> Sua Branch >> Compare & Pull Request*
 - **Nunca junte o seu próprio *Pull Request* antes de alguém aprova-lo.**

## Juntando alterações da *Master* na sua *Branch*
Sempre confira se a sua *branch* está atualizada em relação a *master*. Primeiro, faça o commit da sua branch. Antes de atualiza-la com alterações externas, certifique-se de que seu trabalho está bem feito e commitado localmente, assim não será impactado se existirem conflitos.

	# na sua branch, git add
	$ git commit -m "blah"
	$ git checkout master
	$ git pull origin master

Agora, junte a sua *branch* com a *master*. Podem existir alguns conflitos se você não estiver mantendo o seu código atualizado, mas não se preocupe, normalmente é algo que pode ser resolvido em alguns minutos.

	$ git checkout branchName
	$ git merge master

Se você tentou juntar a sua *branch* e isso resultou em algum conflito mais complexo, e quer começar novamente, você pode recuperar o seu trabalho:
	
	# na sua branch
	$ git merge --abort

## Deletando *Branches*
Quando terminar o desenvolvimento da sua função e tudo já estiver pronto na *master* através de um *pull request*, você deve deletar a sua branch localmente e no GitHub para manter tudo conciso. Você pode deletar manualmente pelo GitHub ou através do terminal:

	$ git push origin :BranchName

A diferença é simplesmente os dois pontos antes do nome.

Para deleta-la localmente:

	$ git branch -d branchName

Para forçar a ação:

	$ git branch -D branchName

### *Lembretes Importantes*

- Avise a sua equipe sempre que juntar um *pull request* com a *master*. Não deixe os seus colegas ficarem desatualizados.
- Realiza *pulls* com frequência por garantia. Mesmo se ninguém te disser nada sobre alterações na master, faça um *pull*. Não doi nada.
- Da para acompanhar visualmente o quão atras da master você esta no GitHub através do menu **Branches**.
- Cheque com os seus colegas antes de fazer algum *merge*.
- Garanta que você esta em alguma *branch* antes de escrever o código. Tenha o habito de conferir sempre.