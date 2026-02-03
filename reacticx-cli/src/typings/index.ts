interface ComponentConfig {
  outDir: string;
}

interface FolderEntry {
  name: string;
  files: string[];
}

interface ComponentInfo {
  name: string;
  category: string;
  path: string;
  files: string[];
  folders: FolderEntry[];
}

interface Registry {
  version: string;
  totalComponents: number;
  categories: string[];
  components: Record<string, ComponentInfo>;
}

interface AddOptions {
  overwrite?: boolean;
  dir?: string;
}

export type {
  ComponentConfig,
  ComponentInfo,
  FolderEntry,
  Registry,
  AddOptions,
};
