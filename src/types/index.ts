export interface VpmRepos {
  name: string
  id: string
  author: string
  url: string
  packages: Packages
}

export interface Packages {
  [packageName: string]: Package
}

export interface Package {
  versions: { [version: string]: PackageJson }
}

export interface PackageJson {
  name: string
  version: string
  displayName: string
  description: string
  unity: string
  documentationUrl: string
  changelogUrl: string
  licensesUrl: string
  license: string
  keywords: string[]
  url: string
  legacyFolders?: { [key: string]: string }
  repo?: string
}
