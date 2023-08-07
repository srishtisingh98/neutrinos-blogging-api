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
export class forgotPassword {
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
    this.serviceName = 'forgotPassword';
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
      instance = new forgotPassword(
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
      //appendnew_flow_forgotPassword_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: forgotPassword');

    //appendnew_flow_forgotPassword_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: forgotPassword');

    this.app['put'](
      `${this.serviceBasePath}/password`,
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
          bh = await this.sd_DiJH9wdf0gGYcXnL(bh, parentSpanInst);
          //appendnew_next_sd_KJ83CAQOzIOXKFAr
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_KJ83CAQOzIOXKFAr');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_forgotPassword_HttpIn
  }
  //   service flows_forgotPassword

  async validatelogin(
    parentSpanInst,
    name: any = undefined,
    password: any = undefined,
    status: any = undefined,
    message: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'validatelogin',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          name: name,
          password: password,
          status: status,
          message: message,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rBTMhowHKS0WAaWV(bh, parentSpanInst);
      //appendnew_next_validatelogin
      return (
        // formatting output variables
        {
          input: {
            status: bh.input.status,
            message: bh.input.message,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zwl16TgY4w4PSgpl',
        spanInst,
        'validatelogin'
      );
    }
  }

  //appendnew_flow_forgotPassword_start

  async sd_DiJH9wdf0gGYcXnL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DiJH9wdf0gGYcXnL',
      parentSpanInst
    );
    try {
      bh.query =
        'UPDATE "User" SET user_password = $2 WHERE username = $1 OR user_email_id = $1';
      bh.params = [
        bh.input.body.username,
        bh.input.body.userpassword,
        bh,
        input.body.user_email_id,
      ];
      console.log(bh.params);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pi239fIUUZZriQP5(bh, parentSpanInst);
      //appendnew_next_sd_DiJH9wdf0gGYcXnL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DiJH9wdf0gGYcXnL',
        spanInst,
        'sd_DiJH9wdf0gGYcXnL'
      );
    }
  }

  async sd_pi239fIUUZZriQP5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pi239fIUUZZriQP5',
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
      let params = [];
      params = params ? params : [];
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kv5KxGElMRJBaiJu(bh, parentSpanInst);
      //appendnew_next_sd_pi239fIUUZZriQP5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pi239fIUUZZriQP5',
        spanInst,
        'sd_pi239fIUUZZriQP5'
      );
    }
  }

  async sd_kv5KxGElMRJBaiJu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kv5KxGElMRJBaiJu',
      parentSpanInst
    );
    try {
      console.log(bh.result);
      console.log(bh.result[1]);
      if (bh.result[1] === 0) {
        bh.input.status = false;
        bh.input.message = 'Password is already Added';
      } else {
        bh.input.status = true;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4pEC6zvAxpYHHmQf(bh, parentSpanInst);
      //appendnew_next_sd_kv5KxGElMRJBaiJu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kv5KxGElMRJBaiJu',
        spanInst,
        'sd_kv5KxGElMRJBaiJu'
      );
    }
  }

  async sd_4pEC6zvAxpYHHmQf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4pEC6zvAxpYHHmQf',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.input.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_aiZEvpHneBNT5qKe(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_iS4WWX3kklqKWfRx(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4pEC6zvAxpYHHmQf',
        spanInst,
        'sd_4pEC6zvAxpYHHmQf'
      );
    }
  }

  async sd_aiZEvpHneBNT5qKe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aiZEvpHneBNT5qKe',
      parentSpanInst
    );
    try {
      bh.response = {
        message: 'Password reset succesfully',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_JCi10dvuHAkH3PsE(bh, parentSpanInst);
      //appendnew_next_sd_aiZEvpHneBNT5qKe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aiZEvpHneBNT5qKe',
        spanInst,
        'sd_aiZEvpHneBNT5qKe'
      );
    }
  }

  async sd_JCi10dvuHAkH3PsE(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JCi10dvuHAkH3PsE');
    }
  }

  async sd_iS4WWX3kklqKWfRx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iS4WWX3kklqKWfRx',
      parentSpanInst
    );
    try {
      bh.response = {
        message: 'Password reset failed',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_OdIOwhghXiEAxjyb(bh, parentSpanInst);
      //appendnew_next_sd_iS4WWX3kklqKWfRx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iS4WWX3kklqKWfRx',
        spanInst,
        'sd_iS4WWX3kklqKWfRx'
      );
    }
  }

  async sd_OdIOwhghXiEAxjyb(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OdIOwhghXiEAxjyb');
    }
  }

  async sd_rBTMhowHKS0WAaWV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rBTMhowHKS0WAaWV',
      parentSpanInst
    );
    try {
      if (!bh.input.name) {
        bh.input.status = false;
        bh.input.message = 'Name is required';
      } else if (!bh.input.password) {
        bh.input.status = false;
        bh.input.message = 'Password is required';
      } else {
        bh.input.status = true;
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_rBTMhowHKS0WAaWV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rBTMhowHKS0WAaWV',
        spanInst,
        'sd_rBTMhowHKS0WAaWV'
      );
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
  //appendnew_flow_forgotPassword_Catch
}
