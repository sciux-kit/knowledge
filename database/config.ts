export type Config = {
  [key: string]: {
    version: string
  }
}

export const defineConfig = (
  config: Config,
) => {
  return config
}

export default defineConfig({
  "sciux-laplace": {
    version: "",
  },
  "sciux": {
    version: "",
  },
  "@sciux/model": {
    version: "",
  },
})