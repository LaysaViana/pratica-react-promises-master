import { KeyAndValue } from "../../types/keyAndValue";

/**
 * Deve criar um objeto a partir da lista de arrays chave/valor
 * 
 * Ex.: fromPairs(['a', 'a'], ['b': 1], ['c': false]) === { a: 'a', b: 1, c: false }
 * 
 * @param args 
 * @returns 
 */
export const fromPairs = (args: KeyAndValue[]): Record<string, unknown> => {
  const objeto: Record<string, unknown> = args.reduce((valorAnterior, valorAtual) => {
    return {
      ...valorAnterior,
      [valorAtual[0]]: valorAtual[1]
    }
  }, {})

  return objeto;

};