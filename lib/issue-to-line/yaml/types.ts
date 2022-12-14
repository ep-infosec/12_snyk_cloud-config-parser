type TagTypes =
  | 'tag:yaml.org,2002:null'
  | 'tag:yaml.org,2002:str'
  | 'tag:yaml.org,2002:int'
  | 'tag:yaml.org,2002:float'
  | 'tag:yaml.org,2002:bool'
  | 'tag:yaml.org,2002:map'
  | 'tag:yaml.org,2002:seq'
  | 'tag:yaml.org,2002:timestamp';

export interface YamlNodeElement {
  id: string;
  tag: TagTypes;
  startMark: YamlMark;
  endMark: YamlMark;
  value: string | any[] | Array<[any, any]>;
}

export interface CommentObject {
  start_mark: Record<any, any>;
  end_mark: Record<any, any>;
  style: any;
  tag: string;
  unique_id: string;
  value: string;
}

interface YamlMark {
  line: number;
  column: number;
  Buffer: string;
  pointer: number;
}
