// import Axios from 'axios'
import jsonwebtoken from 'jsonwebtoken'
import { createLogger } from '../../utils/logger.mjs'

const certificate = `-----BEGIN CERTIFICATE-----
MIIDHTCCAgWgAwIBAgIJfL+mjejENkWOMA0GCSqGSIb3DQEBCwUAMCwxKjAoBgNV
BAMTIWRldi15dGw3dnY1M2p1djBhYnhvLnVzLmF1dGgwLmNvbTAeFw0yNDEwMjUx
NDM4NTRaFw0zODA3MDQxNDM4NTRaMCwxKjAoBgNVBAMTIWRldi15dGw3dnY1M2p1
djBhYnhvLnVzLmF1dGgwLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC
ggEBALAW/STynXB5wQzY91bY+PzEgqTVOBk8xpr1V7KIo188RYiO60NGln1jJ6pL
5Dpixwntg/UB4uH2MS7ykOOUhbv5G6n8Rm/e2R1Yb7cqJRyMYF7813wWz9W7H1nP
VejuQPZwVajtOPLz9yhbURxFA1NTUDGekiyLIkSgOk9i++dZiaHKlJN57AHEcSNh
e8SUjTJYMrlLcpuqkC2jU93HUl5+S1iF/cM5YI8qqPoUlKNpBxov6oODfHVzPwMO
9sPxUzEU/UUnf6PeVsqDb/zcCHV40zY+VdXBWkDAXyC91REwuPWBqw3ETjG0mYza
FFhhmxLsY0aCFnQ2ic1aDLrjJScCAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAd
BgNVHQ4EFgQU1pVps/f8k329nRtU5FZq1H6hV6swDgYDVR0PAQH/BAQDAgKEMA0G
CSqGSIb3DQEBCwUAA4IBAQBOj4TCKfPstW3SK9G4XG2tifFvJt4kpl1Dj9fG4DXO
5jZzUOMl4eTgBCbiX0qNLs5TW80tHEad5NRWWv3x1IzQn/lyLLX2sjCP8aXStvIB
TSSNvI7Ji48f1L9P7BmrVmf7zZVbfh+f+cvfcm9Sa1FVIhF/F4uhftfASHF4ZhAT
kaEdz+RxBEMlV0oF2TqhTqhlUF7fmJMNwfi6iPEu5aBx3LE4Oj65grr5gHml57wm
8fHYE81I3mwbzZJ7OBGWEsS43VzEAs6SW7io+PajJBTVPAQ5aUJpuUpippUfAkuo
ZgFNkq7db/O03b1ZBshVbwsxSOafp++2HnLOICr240JQ
-----END CERTIFICATE-----`

const logger = createLogger('auth')

// const jwksUrl = 'https://test-endpoint.auth0.com/.well-known/jwks.json'

export async function handler(event) {
  try {
    const jwtToken = await verifyToken(event.authorizationToken)

    return {
      principalId: jwtToken.sub,
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: 'Allow',
            Resource: '*'
          }
        ]
      }
    }
  } catch (e) {
    logger.error('User not authorized', { error: e.message })

    return {
      principalId: 'user',
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: 'Deny',
            Resource: '*'
          }
        ]
      }
    }
  }
}

async function verifyToken(authHeader) {
  const token = getToken(authHeader)
  // const jwt = jsonwebtoken.decode(token, { complete: true })

  // TODO: Implement token verification
  // return undefined;
  // return decodedJwt.sub;
  
  return jsonwebtoken.verify(token, certificate, { algorithms: ['RS256'] })
}

function getToken(authHeader) {
  if (!authHeader) throw new Error('No authentication header')

  if (!authHeader.toLowerCase().startsWith('bearer '))
    throw new Error('Invalid authentication header')

  const split = authHeader.split(' ')
  const token = split[1]

  return token
}
