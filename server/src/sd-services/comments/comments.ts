let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class comments {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'comments';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new comments(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_comments_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: comments');

    //appendnew_flow_comments_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: comments');

    this.app['post'](
      `${this.serviceBasePath}/post_comment`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_XgKbTH3Uw42fbcla(bh, parentSpanInst);
          //appendnew_next_sd_2koPyvEqKcutDfwu
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_2koPyvEqKcutDfwu');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/get_comments`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_Daq7cHh1PyLpPMyl(bh, parentSpanInst);
          //appendnew_next_sd_eCj5unteaOWazE8n
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_eCj5unteaOWazE8n');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_comments_HttpIn
  }
  //   service flows_comments

  //appendnew_flow_comments_start

  async sd_XgKbTH3Uw42fbcla(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XgKbTH3Uw42fbcla',
      parentSpanInst
    );
    try {
      bh.query =
        'INSERT INTO "Comment" (post_id, user_id, comment_text) VALUES ($1,$2,$3)';
      console.log(bh.query);
      bh.params = [
        bh.input.body.post_id,
        bh.input.body.user_id,
        bh.input.body.comment_text,
      ];
      console.log(bh.params);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_irSlrnmEYKPfDvXI(bh, parentSpanInst);
      //appendnew_next_sd_XgKbTH3Uw42fbcla
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XgKbTH3Uw42fbcla',
        spanInst,
        'sd_XgKbTH3Uw42fbcla'
      );
    }
  }

  async sd_irSlrnmEYKPfDvXI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_irSlrnmEYKPfDvXI',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_C9OeZH1l3ceoDI6p'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.params;
      params = params ? params : [];
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pbbkekBnaclcc4NL(bh, parentSpanInst);
      //appendnew_next_sd_irSlrnmEYKPfDvXI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_irSlrnmEYKPfDvXI',
        spanInst,
        'sd_irSlrnmEYKPfDvXI'
      );
    }
  }

  async sd_pbbkekBnaclcc4NL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pbbkekBnaclcc4NL',
      parentSpanInst
    );
    try {
      console.log(bh.result);
      bh.response = {
        message: 'comment successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_KkrGyBe3f84o1w2n(bh, parentSpanInst);
      //appendnew_next_sd_pbbkekBnaclcc4NL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pbbkekBnaclcc4NL',
        spanInst,
        'sd_pbbkekBnaclcc4NL'
      );
    }
  }

  async sd_KkrGyBe3f84o1w2n(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KkrGyBe3f84o1w2n');
    }
  }

  async sd_Daq7cHh1PyLpPMyl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Daq7cHh1PyLpPMyl',
      parentSpanInst
    );
    try {
      bh.query =
        'SELECT "User".username, "Comment".comment_text, "Comment".comment_date FROM "Comment" JOIN "User" ON "Comment".user_id = "User".user_id WHERE "Comment".post_id = $1';
      console.log(bh.input.body);
      bh.params = [bh.input.body.post_id];
      console.log(bh.params);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qo4IxuHC7XKqWOwH(bh, parentSpanInst);
      //appendnew_next_sd_Daq7cHh1PyLpPMyl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Daq7cHh1PyLpPMyl',
        spanInst,
        'sd_Daq7cHh1PyLpPMyl'
      );
    }
  }

  async sd_qo4IxuHC7XKqWOwH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qo4IxuHC7XKqWOwH',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_C9OeZH1l3ceoDI6p'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.params;
      params = params ? params : [];
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EjxyoWpcujPnF2ZA(bh, parentSpanInst);
      //appendnew_next_sd_qo4IxuHC7XKqWOwH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qo4IxuHC7XKqWOwH',
        spanInst,
        'sd_qo4IxuHC7XKqWOwH'
      );
    }
  }

  async sd_EjxyoWpcujPnF2ZA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EjxyoWpcujPnF2ZA',
      parentSpanInst
    );
    try {
      console.log(bh.result);
      bh.response = {
        comments: bh.result,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_p9Z6UTAi3o75IsLN(bh, parentSpanInst);
      //appendnew_next_sd_EjxyoWpcujPnF2ZA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EjxyoWpcujPnF2ZA',
        spanInst,
        'sd_EjxyoWpcujPnF2ZA'
      );
    }
  }

  async sd_p9Z6UTAi3o75IsLN(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_p9Z6UTAi3o75IsLN');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_comments_Catch
}
