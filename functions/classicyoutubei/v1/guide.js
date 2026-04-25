export async function onRequest(context) {
  const { request } = context
  const method = request.method

  if (method === "GET" || method === "POST" || method === "OPTIONS") {
    return new Response(JSON.stringify({
  "responseContext": {
    "serviceTrackingParams": [
      {
        "service": "GFEEDBACK",
        "params": [
          {
            "key": "e",
            "value": "23710476,23726564,23735283,23736684,23744176,23749511,23751767,23752869,23755886,23755898,23758087,23758615,23760558,23761607,23762649,23764069,23774272,23777630,23780478,23782631,23782758,23785333,23786285,23787150,23789841,23790386,23790938,23791949,23794281,23794403,23797222,23797553,23797553,23797625,23798076,23798241,23799132,23801088,9407156,9428879,9449243,9460516,9463154,9475669"
          },
          {
            "key": "logged_in",
            "value": "0"
          }
        ]
      },
      {
        "service": "SUGGEST"
      }
    ]
  },
  "items": [
    {
      "guideSectionRenderer": {
        "items": [
          {
            "guideEntryRenderer": {
              "title": "Search",
              "icon": {
                "iconType": "SEARCH"
              },
              "trackingParams": "CAgQtSwYACITCIe4zriaguECFcKAxAodDuoDlw==",
              "formattedTitle": {
                "runs": [
                  {
                    "text": "Search"
                  }
                ]
              },
              "navigationEndpoint": {
                "clickTrackingParams": "CAgQtSwYACITCIe4zriaguECFcKAxAodDuoDlzIKZy1wZXJzb25hbA==",
                "searchEndpoint": {
                  "query": ""
                }
              }
            }
          },
          {
            "guideEntryRenderer": {
              "title": "Home",
              "icon": {
                "iconType": "WHAT_TO_WATCH"
              },
              "trackingParams": "CAcQtSwYASITCIe4zriaguECFcKAxAodDuoDlw==",
              "formattedTitle": {
                "runs": [
                  {
                    "text": "Home"
                  }
                ]
              },
              "navigationEndpoint": {
                "clickTrackingParams": "CAcQtSwYASITCIe4zriaguECFcKAxAodDuoDlzIKZy1wZXJzb25hbA==",
                "browseEndpoint": {
                  "browseId": "default"
                }
              }
            }
          },
          {
            "guideEntryRenderer": {
              "title": "Subscriptions",
              "icon": {
                "iconType": "SUBSCRIPTIONS"
              },
              "trackingParams": "CAYQtSwYAiITCIe4zriaguECFcKAxAodDuoDlw==",
              "formattedTitle": {
                "runs": [
                  {
                    "text": "Subscriptions"
                  }
                ]
              },
              "navigationEndpoint": {
                "clickTrackingParams": "CAYQtSwYAiITCIe4zriaguECFcKAxAodDuoDlzIKZy1wZXJzb25hbA==",
                "browseEndpoint": {
                  "browseId": "FEsubscriptions"
                }
              }
            }
          },
          {
            "guideEntryRenderer": {
              "title": "Library",
              "icon": {
                "iconType": "TAB_LIBRARY"
              },
              "trackingParams": "CAUQtSwYAyITCIe4zriaguECFcKAxAodDuoDlw==",
              "formattedTitle": {
                "runs": [
                  {
                    "text": "Library"
                  }
                ]
              },
              "navigationEndpoint": {
                "clickTrackingParams": "CAUQtSwYAyITCIe4zriaguECFcKAxAodDuoDlzIKZy1wZXJzb25hbA==",
                "browseEndpoint": {
                  "browseId": "FEmy_youtube"
                }
              }
            }
          }
        ],
        "trackingParams": "CAQQ5isYACITCIe4zriaguECFcKAxAodDuoDlw=="
      }
    }
  ],
  "trackingParams": "CAAQumkiEwiHuM64moLhAhXCgMQKHQ7qA5c=",
  "footer": {
    "guideSectionRenderer": {
      "items": [
        {
          "guideEntryRenderer": {
            "title": "Sign In",
            "icon": {
              "iconType": "SIGN_IN"
            },
            "trackingParams": "CAMQtSwYACITCIe4zriaguECFcKAxAodDuoDlw==",
            "formattedTitle": {
              "runs": [
                {
                  "text": "Sign In"
                }
              ]
            },
            "navigationEndpoint": {
              "clickTrackingParams": "CAMQtSwYACITCIe4zriaguECFcKAxAodDuoDlzIIZy1zeXN0ZW0=",
              "signInEndpoint": {
                "nextEndpoint": {
                  "clickTrackingParams": "CAMQtSwYACITCIe4zriaguECFcKAxAodDuoDlzIIZy1zeXN0ZW0=",
                  "browseEndpoint": {
                    "browseId": "default"
                  }
                }
              }
            }
          }
        },
        {
          "guideEntryRenderer": {
            "title": "Settings",
            "icon": {
              "iconType": "SETTINGS"
            },
            "trackingParams": "CAIQtSwYASITCIe4zriaguECFcKAxAodDuoDlw==",
            "formattedTitle": {
              "runs": [
                {
                  "text": "Settings"
                }
              ]
            },
            "navigationEndpoint": {
              "clickTrackingParams": "CAIQtSwYASITCIe4zriaguECFcKAxAodDuoDlzIIZy1zeXN0ZW0=",
              "applicationSettingsEndpoint": {
                "hack": true
              }
            }
          }
        }
      ],
      "trackingParams": "CAEQ5isiEwiHuM64moLhAhXCgMQKHQ7qA5c="
    }
  }
}), {
      headers: {
        "content-type": "application/json; charset=UTF-8",
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "GET, POST, OPTIONS",
        "access-control-allow-headers": "*"
      }
    })
  }

  return new Response("Method Not Allowed", { status: 405 })
}