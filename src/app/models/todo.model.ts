//les modeles de donnees sont les entites du system
//fichier qui decrit la forme des donnees
//semblable a une table de donnee
export interface Todo {
  // | en typescript c'est possibilite d'avoir
  // plusieurs types

  // | null  champ optionel

  //identifiant
  id: number | null;

  title: string | null;
  completed: boolean | null;
  priority: string | null;
  //dueDate: Date | null;
  dueDate: string;

  description: string | null;
}
