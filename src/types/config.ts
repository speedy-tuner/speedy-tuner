interface Entity {
  name: string,
  title: string,
}

interface Field extends Entity {
  help: string,
  condition: string,
}

interface Group extends Entity {
  fields: Field[],
}

interface Dialog extends Entity {
  help: {
    link: string,
  },
  groups: Group[],
}

interface SubMenu extends Entity {}

interface Menu extends Entity {
  subMenus: SubMenu[];
}

interface ArrayShape {
  columns: number,
  rows: number,
}

interface Constant {
  type: 'scalar' | 'bits' | 'array',
  size: 'U08' | 'S08' | 'U16' | 'S16'
  offset: number,
  units: string,
  scale: number,
  transform: number,
  min: number,
  max: number,
  address: string, // TODO: make an object
  shape: ArrayShape,
  values: string[],
}

interface Constants {
  [name: string]: Constant,
}

interface Page {
  number: number,
  size: number,
  constants: Constants,
}

interface Config {
  apiVersion: string,
  signature: string,
  pages: Page[],
  dialogs: Dialog[],
  menus: Menu[],
}

export type {
  Field,
  Group,
  Dialog,
  SubMenu,
  Menu,
  ArrayShape,
  Constant,
  Constants,
  Page,
  Config,
};
