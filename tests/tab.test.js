const request = require('supertest');
const server = require('../server');
const statusCode = require('../util');



describe('Test Create Tab', () => {
  it('should create a new tab', async () => {
    const res = await request(server)
      .post('/tab')
      .send({
        "name": "Disease history",
        "description": "The chronic of the disease at hand",
        "dataPoints": [
            {
                "dataType": "selection",
                "label": "ECOG_SCORE",
                "description": "ECOC score at the start of IO",
                "options": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "unknown"
                ]
            },
            {
                "dataType": "text",
                "label": "ECOG_HB_LEVEL",
                "placeholder": "g/dL",
                "description": "Hemogolobin level at the start of IO (g/dL)"
            }
        ]
    });
    expect(res.statusCode).toEqual(statusCode.CREATED);
    expect(res.body).not.toBe(null);
  })
})

describe('Test Update Tab', () => {
    it('should update tab', async () => {
      const res = await request(server)
        .put('/tab/6030c6c480cfa17320fd1277')
        .send({
          "name": "Updated Disease history",
          "description": "The chronic of the disease at hand",
          "dataPoints": [
              {
                  "dataType": "selection",
                  "label": "ECOG_SCORE",
                  "description": "ECOC score at the start of IO",
                  "options": [
                      "0",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "unknown"
                  ]
              },
              {
                  "dataType": "text",
                  "label": "ECOG_HB_LEVEL",
                  "placeholder": "g/dL",
                  "description": "Hemogolobin level at the start of IO (g/dL)"
              }
          ]
      });
      expect(res.statusCode).toEqual(statusCode.UPDATED);
    })
  })

  describe('Test Get Tab by id', () => {
    it('should get tab by id', async () => {
      const res = await request(server)
        .get('/tab/6030c6c480cfa17320fd1277')
        .send();
      expect(res.statusCode).toEqual(statusCode.OK);
      expect(res.body).not.toBe(null);
      expect(res.body._id).toEqual("6030c6c480cfa17320fd1277");
    })
  })

  describe('Test Get All Tabs', () => {
    it('should get all tabs', async () => {
      const res = await request(server)
        .get('/tab')
        .send();
      expect(res.statusCode).toEqual(statusCode.OK);
      expect(res.body).not.toBe(null);
      expect(res.body.length).not.toBe(0);
    })
  })

  describe('Test Get Tab Stat', () => {
    it('should get all tabs', async () => {
      const res = await request(server)
        .get('/tab/tabStats')
        .send();
      expect(res.statusCode).toEqual(statusCode.OK);
      expect(res.body).not.toBe(null);
      expect(res.body.length).not.toBe(0);
    })
  })