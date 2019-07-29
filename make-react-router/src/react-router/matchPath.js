import pathToRegexp from 'path-to-regexp'
function compliePath(path, options) {
  const regexp = pathToRegexp(path, [], options)
  return {
    regexp
  }
}
function matchPath(pathName, options = {}) {
  const { path, exect = false, strict = false,
    sensitive = false
  } = options;
  const paths = [].concat(path)
  return paths.reduce((matched, path) => {
    if (matched) return matched
    const { regexp } = compliePath(path, {
      strict,
      sensitive,
      end: exect
    })
    const match = regexp.exec(pathName);
    if (!match) return null;
    return {}
  }, null)
}

export default matchPath